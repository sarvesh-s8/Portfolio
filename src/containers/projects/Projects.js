import React, { useState, useEffect, lazy, Suspense } from "react";
import "./Project.css";
import BlogCard from "../../components/blogCard/BlogCard";
import { Fade } from "react-reveal";
import { projectSection } from "../../portfolio";
export default function Projects() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div className="blog-header">
          <h1 className="blog-header-text">{projectSection.title}</h1>
          <p className="subTitle blog-subtitle">{projectSection.subtitle}</p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {projectSection.proejcts.map((blog) => {
              return (
                <BlogCard
                  blog={{
                    url: blog.url,
                    image: blog.image,
                    title: blog.title,
                    description: blog.description,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
