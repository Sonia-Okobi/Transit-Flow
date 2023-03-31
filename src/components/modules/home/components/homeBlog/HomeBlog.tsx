import React from 'react';
import BaseTag from '../../../../ui/baseTag/BaseTag';
import BaseButton from '../../../../ui/button/BaseButton';
import './index.scss';
import { blogPosts } from '../../resource';
import HomeBlogPost from './HomeBlogPost';

export default function HomeBlog() {
  return (
    <div className="home-blog">
      <div className="home-blog__content">
        <BaseTag value="Our Blog" className="home-blog__content__tag" />
        <h3 className="home-blog__content__header">Our Latest News</h3>
        <div className="home-blog__content__blog-posts">
          {blogPosts.map((blogPost, index) => (
            <HomeBlogPost
              image={blogPost.image}
              date={blogPost.date}
              title={blogPost.title}
              key={index}
            />
          ))}
        </div>
        <BaseButton variant="secondary" className="home-blog__content__button">
          More Blog
        </BaseButton>
      </div>
    </div>
  );
}
