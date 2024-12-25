import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import ReactMarkdown from "react-markdown";
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedPost, setExpandedPost] = useState(null); 

  useEffect(() => {
    const client = createClient({
      space: "pdsquqioz6du",
      accessToken: "QgaWhf1BJci6_YRQtGBvkM7RqOrYSSMyr5do4tTKVbo",
    });

    client
      .getEntries({ content_type: "blog" })
      .then((response) => {
        setPosts(response.items);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blog posts:", err);
        setError("Failed to fetch blog posts.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading-text">Loading...</p>;
  if (error) return <p className="error-text">{error}</p>;

  return (
    <div className="blog-container">
      <h1 className="blog-heading">Blog Posts</h1>
      <div className="blog-grid">
        {posts.map((post) => {
          const { topic, content, media, location } = post.fields;

          const mediaUrl = Array.isArray(media) && media[0]?.fields?.file?.url
            ? `http:${media[0].fields.file.url}`
            : null;

          const locationText = location ? `Lat: ${location.lat}, Lon: ${location.lon}` : "";

          const isExpanded = expandedPost === post.sys.id;

          return (
            <div key={post.sys.id} className="blog-card">
              {mediaUrl && (
                <img
                  src={mediaUrl}
                  alt={topic || "Blog Image which reflects a visual impression of the topic"}
                  className="blog-image"
                />
              )}
              <div className="blog-content">
                <h2
                  className="blog-title"
                  onClick={() => setExpandedPost(isExpanded ? null : post.sys.id)}
                >
                  {topic}
                </h2>
                {isExpanded && (
                  <>
                    <div className="blog-text">
                      <ReactMarkdown>{content}</ReactMarkdown>
                    </div>
                    {location && <p className="blog-location">{locationText}</p>}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
