import React, { useState, useRef } from "react";
import { FaEye, FaGithub } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import projects from "../data/project.json";

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
    if (modalRef.current && e.target === modalRef.current) {
      closeModal();
    }
  }

  return (
    <div className="py-16">
      <h1 className="text-center font-semibold text-4xl my-5 mb-5" id="projects">
        Recent's Projects
      </h1>
      <section className="py-12 flex gap-4 lg:flex-nowrap justify-center  flex-wrap  px-12 lg:px-32">
        {projects.map((project) => (
          <div className="lg:w-1/3 md:w-1/3 sm:w-1/2 mb-3 rounded-md  w-full shadow-md shadow-indigo-200" key={project.id}>
            <div className="group relative block  rounded-md lg:my-0">
              <div className="relative">
                <img alt="Developer" src={project.image} className="absolute rounded-md w-full object-cover " />
              </div>

              <div className="relative group-hover:bg-black/60 pb-10 rounded-md p-4 sm:p-6 lg:p-8">
                <div className="">
                  <div className="translate-y-8 transform opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className=" lg:py-9 py-8  flex justify-center text-white">
                      <button onClick={() => handleModal(project.id)} className="px-4 p-2 flex  items-center  rounded-full  bg-indigo-600 text-white">
                        Detail
                        <FaEye className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {modal && selectedProject && (
              <div className="fixed text-gray-500  flex items-center justify-center overflow-hidden z-50 bg-black/40  left-0 right-0 top-0 bottom-0" ref={modalRef} onClick={handleModalClick}>
                <div className="lg:max-w-2xl max-h-full overflow-auto max-w-md gap-2 p-4 lg:p-6 relative m-4  rounded-md  bg-white">
                  {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2"> */}
                  <div className="grid grid-cols-1 gap-4">
                    <img alt="Gambar project" src={projects[selectedProject - 1].image} className=" shadow-md shadow-indigo-200 w-full rounded-lg object-contain" />
                    <div>
                      <h2 className="text-xl text-black">{projects[selectedProject - 1].title}</h2>
                      <div className="flex items-center space-x-2 my-2">
                        <div className="">
                          <img className="w-7" src={projects[selectedProject - 1].tech[0]} alt="icons" />
                        </div>
                        <div className="">
                          <img className="w-7" src={projects[selectedProject - 1].tech[1]} alt="icons" />
                        </div>
                        <div className="">
                          <img className="w-7" src={projects[selectedProject - 1].tech[2]} alt="icons" />
                        </div>
                      </div>
                      <p className=" text-sm text-gray-700">{projects[selectedProject - 1].description}</p>

                      <div className="mt-6 flex  justify-between space-x-1">
                        <div>
                          <button onClick={closeModal} type="button" className="inline-block hover:bg-opacity-80 transition-all duration-300 rounded-full text-red-600 shadow px-2 py-2 ">
                            <AiOutlineClose size={25} />
                          </button>
                        </div>
                        <div className="space-x-1">
                          <a href={projects[selectedProject - 1].repo} className="inline-block hover:bg-opacity-80 transition-all duration-300 rounded-full bg-gray-600 px-2 py-2 text-white">
                            <FaGithub size={25} />
                          </a>
                          <a href={projects[selectedProject - 1].link} className="inline-block hover:bg-opacity-80 transition-all duration-300 items-center rounded-full bg-indigo-600 px-2  py-2  text-white">
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
        ))}
      </section>
    </div>
  );
}
