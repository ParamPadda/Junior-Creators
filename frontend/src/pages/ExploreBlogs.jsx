import React, { useEffect, useState, useMemo } from 'react';
import { Input, Modal, Button, Spin } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faSearch, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import debounce from 'lodash/debounce';

const ExploreBlogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [allBlogs, setAllBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  console.log(filteredBlogs)
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [commentModalVisible, setCommentModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [blogsMost, setMostBlogs] = useState([]);
console.log(blogsMost)
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/blogs/getBlogs');
        if (res.data.success) {
          console.log(res,"res blog")
          setAllBlogs(res.data.blogs);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
       try {
      const res = await axios.get('http://localhost:8080/api/blogs/getMarkMostLiked');
      if (res) {
        console.log("getMarkMostLiked",res.data)
        setMostBlogs(res.data.blogs);
      }
    } catch (error) {
      message.error('Failed to fetch blogs.');
      console.error(error);
    } finally {
      setLoading(false);
    }
    };

    fetchBlogs();
  }, []);

  const calculateDaysAgo = (dateStr) => {
    const days = Math.floor((new Date() - new Date(dateStr)) / (1000 * 60 * 60 * 24));
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  };

const handleSearch = (term) => {
  const results = allBlogs.filter(blog =>
    blog.title.toLowerCase().includes(term.toLowerCase())
  );
  console.log(results,"results")
  setFilteredBlogs(results);
};


  const debouncedSearch = useMemo(() => debounce(handleSearch, 300), [allBlogs]);

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  };

  const displayedBlogs = filteredBlogs.length ? filteredBlogs : allBlogs;

  const handleOpenBlog = (blog) => {
    setSelectedBlog(blog);
    setCommentModalVisible(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="bg-[#FFFDF9] min-h-screen px-4 md:px-12 py-6">
      {/* Search Bar */}
      <div className="flex justify-center items-center gap-2 mb-8">
        <div className="relative w-full max-w-2xl">
          <Input
            placeholder="Search blogs..."
            className="w-full py-2 pr-10 pl-4 rounded-full shadow text-lg"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute right-10 top-3 text-gray-500 cursor-pointer"
            onClick={() => handleSearch(searchTerm)}
          />
          <FontAwesomeIcon
            icon={faMicrophone}
            className="absolute right-3 top-3 text-gray-500 cursor-pointer"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left - Topics and Most Liked */}
        <div className="lg:w-1/3 space-y-8">
          <div>
            <h3 className="text-xl font-bold text-[#1E2A38] mb-2">Topics you might like</h3>
            <div className="flex flex-wrap gap-2">
              {['Animals', 'Science', 'Space', 'Oceans'].map(topic => (
                <span
                  key={topic}
                  className="bg-blue-100 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-200"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1E2A38] mb-2">Most Liked Blogs</h3>
            {blogsMost
              .sort((a, b) => b.likes - a.likes)
              .slice(0, 3)
              .map(blog => (
                <div
                  key={blog._id}
                  className="flex items-center gap-4 bg-white p-4 rounded-xl shadow hover:scale-[1.02] transition cursor-pointer"
                  onClick={() => handleOpenBlog(blog)}
                >
                  <img    src={ `data:${blog.image.contentType};base64,${blog.image.data}`} alt="Blog" className="w-10 h-10 rounded-full object-cover" />
               

                  <div>
                    <h4 className="font-semibold text-[#1E2A38]">{blog.title}</h4>
                    <p className="text-sm text-gray-600">By Unknown</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Right - Blog Cards */}
        <div className="lg:w-2/3">
          <h2 className="text-xl font-bold text-[#1E2A38] mb-4">Explore Blogs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {filteredBlogs.map(blog => (
              <div
                key={blog._id}
                className="bg-white rounded-xl shadow p-4 hover:shadow-lg cursor-pointer transition"
                onClick={() => handleOpenBlog(blog)}
              >
                <img
                  src={blog.imageSrc}
                  alt="Blog"
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h3 className="font-semibold text-lg text-[#1E2A38]">{blog.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{calculateDaysAgo(blog.createdAt)}</p>
                <p className="text-gray-700 mb-3">{blog.about.slice(0, 100)}...</p>
                <div className="flex gap-4 items-center">
                  <FontAwesomeIcon icon={faThumbsUp} className="text-gray-500" /> 0
                  <FontAwesomeIcon icon={faThumbsDown} className="text-gray-500" /> 0
                  <Button className="ml-auto" size="small">Follow</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Modal with Audio */}
      <Modal
        open={commentModalVisible}
        onCancel={() => setCommentModalVisible(false)}
        footer={null}
        width={900}
        className="top-10"
      >
        {selectedBlog && (
          <div className="flex gap-6">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[#1E2A38] mb-2">{selectedBlog.title}</h2>
              <p className="text-gray-700 mb-4">{selectedBlog.about}</p>
              <p className="text-sm text-gray-500">{calculateDaysAgo(selectedBlog.createdAt)}</p>
              {selectedBlog.audioSrc && (
                <audio controls className="mt-4">
                  <source src={selectedBlog.audioSrc} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>
            <div className="w-1/3 border-l pl-4">
              <h3 className="font-semibold mb-2">Comments</h3>
              <p className="text-sm text-gray-500">(To be implemented)</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ExploreBlogs;
