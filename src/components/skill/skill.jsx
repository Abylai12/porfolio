import Tags from "../tags/tags";

const Skill = () => {
  return (
    <section className="px-24 py-20">
      <Tags textTag="Skills" />
      <div className="">
        <div className="flex justify-center mt-4 text-gray-600 text-xl">
          <span>
            The skills, and tools and technologies i am really good at:
          </span>
        </div>
        <div className="mx-8">
          <div className="flex justify-between my-12">
            <img
              src="./images/skills/js.png
          "
              alt=""
            />
            <img src="./images/skills/ts.png" alt="" />
            <img src="./images/skills/react.png" alt="" />
            <img src="./images/skills/next.png" alt="" />
            <img src="./images/skills/node.png" alt="" />
            <img src="./images/skills/ex.png" alt="" />
            <img src="./images/skills/nest.png" alt="" />
            <img src="./images/skills/socket.png" alt="" />
          </div>
          <div className="flex justify-between">
            <img src="./images/skills/postgre.png" alt="" />
            <img src="./images/skills/mongo.png" alt="" />
            <img src="./images/skills/sass.png" alt="" />
            <img src="./images/skills/tailwind.png" alt="" />
            <img src="./images/skills/figma.png" alt="" />
            <img src="./images/skills/cypress.png" alt="" />
            <img src="./images/skills/story.png" alt="" />
            <img src="./images/skills/git.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skill;
