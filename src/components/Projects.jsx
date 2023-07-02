import React, { useState, useRef } from "react";
import { FaEye, FaGithub } from "react-icons/fa";
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

  console.log(projects);

  return (
    <>
      <h1 className="text-center font-semibold text-4xl my-5">Recent's Projects</h1>
      <section className="py-12 flex gap-4 lg:flex-nowrap justify-center  flex-wrap  px-12 lg:px-32">
        {projects.map((project) => (
          <div className="lg:w-1/3 md:w-1/3 sm:w-1/2 mb-10  w-4/5 shadow-md shadow-indigo-200" key={project.id}>
            <div className="group relative block  rounded-md lg:my-0">
              <div className="relative">
                <img alt="Developer" src={project.image} className="absolute rounded-md w-full object-cover " />
              </div>

              <div className="relative group-hover:bg-black/60 pb-4 rounded-md p-4 sm:p-6 lg:p-8">
                <div className="">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm lg:py-10 py-6 flex justify-center text-white">
                      <button onClick={() => handleModal(project.id)} className="px-4 p-2 flex items-center  rounded-full  bg-indigo-600 text-white">
                        Detail
                        <FaEye className="ml-1" />
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {modal && selectedProject && (
              <div className="fixed text-gray-500  flex items-center justify-center overflow-auto z-50 bg-black/40 backdrop-blur-sm left-0 right-0 top-0 bottom-0" ref={modalRef} onClick={handleModalClick}>
                <div className="lg:max-w-2xl max-w-md gap-2 p-6 relative mx-10 rounded-md shadow-md bg-white">
                  <button onClick={closeModal} className="block">
                    <GrClose size={19} className="absolute  lg:top-3 top-2 lg:right-4 right-2" />
                  </button>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <img alt="Gambar project" src={projects[selectedProject - 1].image} className=" shadow-md shadow-indigo-200 w-full mt-3 lg:mt-0 rounded-lg object-contain" />
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
                      <p className=" text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eos. Inventore dolor delectus commodi laudantium adipisci, illum amet itaque optio!</p>

                      <div className="mt-6 flex justify-end space-x-1">
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
            )}
          </div>
        ))}
      </section>
    </>
  );
}
