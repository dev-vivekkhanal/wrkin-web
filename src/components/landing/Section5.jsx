const Section5 = () => {
  // local variables
  const section_data = {
    cuboids: ["Task", "Calendar", "HRMS", "Group"],
    todos: [
      {
        heading: "Task Management",
        desc: "Easily manage tasks and projects with Wrkin.app's intuitive task management feature. Create, assign, and prioritize tasks in chat conversations or dedicated task lists. Real-time tracking and status updates keep you organized and informed, ensuring that important tasks never fall through the cracks. Choose between task lists and kanban boards to match your workflow.",
        small_cuboids: [
          {
            name: "HRMS",
            type: "primary",
          },
          {
            name: "Task",
            type: "secondary",
          },
        ],
      },

      {
        heading: "Project management",
        desc: "Take charge of projects with Wrkin.app's project management capabilities. Create projects with dedicated chat channels for efficient communication. Collaborate seamlessly, share updates, and assign tasks within project channels. Monitor project progress, track milestones, and access project-level analytics. Project templates simplify setup and ensure consistency across projects.",
        small_cuboids: [
          {
            name: "Group",
            type: "secondary",
          },
          {
            name: "Calendar",
            type: "primary",
          },
        ],
      },

      {
        heading: "Communication and Collaboration",
        desc: "Promote effective communication and collaboration using Wrkin.app's chat and collaboration features. Organize chat channels for teams, projects, and departments. Share files, links, and documents within conversations, tasks, and projects. Real-time messaging keeps teams connected, wherever they are. Wrkin.app creates a dynamic workspace for professionals, enhancing teamwork and productivity.",
        small_cuboids: [
          {
            name: "HRMS",
            type: "primary",
          },
          {
            name: "Task",
            type: "secondary",
          },
        ],
      },
    ],
  };
  return (
    <section className="pb-32 -mt-64 md:-mt-96 md:flex gap-4 items-end">
      <div className="hidden md:block flex-1">
        <h3 className="block w-fit mx-auto text-3xl bg-primary-main   font-bold px-8 py-4 rotate-[-35deg]  min-w-[90px] text-center mb-2">
          {section_data?.cuboids[0]}
        </h3>
        <h3 className="block w-fit mx-auto text-3xl bg-primary-main px-8 py-4 relative z-10 lg:-right-32 -rotate-6 font-bold min-w-[90px] text-center">
          {section_data?.cuboids[1]}
        </h3>
        <h3 className="block w-fit mx-auto text-3xl bg-secondary-main text-dark-900 font-bold px-8 py-4 rotate-[35deg]  min-w-[90px] text-center mb-2">
          {section_data?.cuboids[2]}
        </h3>
        <h3 className="block w-fit mx-auto text-3xl bg-secondary-main text-dark-900 px-8 py-4 -rotate-6 font-bold min-w-[90px] text-center">
          {section_data?.cuboids[3]}
        </h3>
      </div>
      <div className="flex-1">
        <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold px-5 ">
          Ways{" "}
          <span className="inline-block text-lg bg-primary-main px-3 py-2 -rotate-6 mx-1">
            TO DO
          </span>{" "}
          <br />
          Management
        </h1>
        {/* ways todo management */}
        <div>
          {section_data?.todos?.map((todo, todo_index) => {
            return (
              <div key={todo_index} className="px-5 mt-20">
                <h2 className="text-[1.3rem]  font-medium w-fit leading-loose border-b-primary-main border-b-2">
                  {todo?.heading}
                </h2>

                <p className="text-dark-200 text-sm my-10">{todo?.desc}</p>

                <div className="md:hidden">
                  {todo?.small_cuboids?.map(
                    (small_cuboids_data, small_cuboids_index) => {
                      if (small_cuboids_data?.type === "secondary")
                        return (
                          <h3
                            key={small_cuboids_index}
                            className="block w-fit ml-auto text-lg bg-secondary-main text-dark-900 font-bold px-3 py-2 rotate-[35deg]  min-w-[90px] text-center mb-2"
                          >
                            {small_cuboids_data?.name}
                          </h3>
                        );
                      else
                        return (
                          <h3
                            key={small_cuboids_index}
                            className="block w-fit ml-auto text-lg bg-primary-main px-3 py-2 -rotate-6 font-bold min-w-[90px] text-center "
                          >
                            {small_cuboids_data?.name}
                          </h3>
                        );
                    }
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section5;
