import React, { useState, useRef } from "react";
import { FaEye, FaGithub } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import projects from "../data/project.json";
import { HiOutlineExternalLink } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Projects() {
  const [modal, setModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  function handleModal(projectId) {
    setSelectedProject(projectId);
    setModal(true);
  }

  function closeModal() {
    setSelectedProject(null);
    setModal(false);
  }

  function handleModalClick(e) {
    if (modalRef.current && e.target == modalRef.current) {
      closeModal();
    }
  }

  return (
    <div className="py-16">
      <h1
        className="text-center font-semibold text-4xl my-5 mb-5"
        id="projects"
      >
        Recent's Projects
      </h1>
      <section className="py-12 px-12 flex gap-3 flex-wrap items-center lg:flex-nowrap ">
        {projects.map((project, index) => (
          <div
            className="lg:w-1/3 md:w-1/3 sm:w-1/2 w-full mx-auto"
            key={index}
          >
            <div className="w-full group relative">
              <img src={project.image} className="rounded-md shadow" alt="/" />
              <div className="absolute top-0 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 w-full h-full bg-indigo-600 ">
                <div className="p-3 px-4">
                  <h1 className="text-white font-semibold text-xs lg:text-xl md:text-xl sm:text-lg">
                    {project.title.slice(0, 32)}...
                  </h1>
                  <p className="text-white overflow-hidden lg:text-lg sm:text-sm md:text-lg text-xs my-2">
                    {project.description.slice(0, 39)}...
                  </p>
                  <div className="lg:flex md:flex sm:flex  hidden space-x-2 items-center">
                    {project.tech.map((nameTech, index) => (
                      <div key={index}>
                        <img
                          src={nameTech}
                          className="w-6 bg-white rounded-md p-1"
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute p-3 bottom-0 w-full">
                  <div className="flex justify-between">
                    <div className="">
                      <button
                        onClick={() => handleModal(project.id)}
                        className="text-white lg:text-lg md:text-lg sm:text-lg text-xs"
                      >
                        Detail{" "}
                        <MdKeyboardArrowRight
                          className="inline -ml-[0.4rem]"
                          size={18}
                        />{" "}
                      </button>
                    </div>

                    <div className="flex space-x-2">
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub size={22} className="text-white" />
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <HiOutlineExternalLink
                          size={22}
                          className="text-white"
                        />
                      </a>
                    </div>
                    {modal && selectedProject && (
                      <div
                        className="fixed text-gray-500 flex items-center justify-center overflow-hidden z-[9999] bg-black/40 left-0 right-0 top-0 bottom-0"
                        ref={modalRef}
                        onClick={handleModalClick}
                      >
                        <div className="lg:max-w-2xl max-h-full overflow-auto max-w-md gap-2 p-4 lg:p-6 relative m-4 rounded-md bg-white">
                          <div className="grid grid-cols-1 gap-4">
                            <LazyLoadImage
                              effect="blur"
                              alt="Gambar project"
                              src={projects[selectedProject - 1].image}
                              className="w-full rounded-lg object-contain"
                            />
                            <div>
                              <h2 className="text-xl text-black">
                                {projects[selectedProject - 1].title}
                              </h2>
                              <div className="flex items-center space-x-2 my-2">
                                {projects[selectedProject - 1].tech.map(
                                  (tech, index) => (
                                    <div key={index}>
                                      <LazyLoadImage
                                        effect="blur"
                                        className="w-7"
                                        src={tech}
                                        alt="/"
                                      />
                                    </div>
                                  )
                                )}
                              </div>
                              <p className="text-sm text-gray-700">
                                {projects[selectedProject - 1].description}
                              </p>

                              <div className="mt-6 flex justify-between space-x-1">
                                <div>
                                  <button
                                    onClick={closeModal}
                                    type="button"
                                    className="inline-block hover:bg-opacity-80 transition-all duration-300 rounded-full text-red-600 shadow px-2 py-2"
                                  >
                                    <AiOutlineClose size={25} />
                                  </button>
                                </div>
                                <div className="space-x-1">
                                  <a
                                    href={projects[selectedProject - 1].repo}
                                    className="inline-block hover:bg-opacity-80 transition-all duration-300 rounded-full bg-gray-600 px-2 py-2 text-white"
                                  >
                                    <FaGithub size={25} />
                                  </a>
                                  <a
                                    href={projects[selectedProject - 1].link}
                                    className="inline-block hover:bg-opacity-80 transition-all duration-300 items-center rounded-full bg-indigo-600 px-2 py-2 text-white"
                                  >
                                    <FaEye size={25} />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
