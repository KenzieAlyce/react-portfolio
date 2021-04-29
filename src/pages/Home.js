import ProfilePic from "../assets/images/me-test.jpg";

function Home(props) {
  return (
    <section id="aboutMe">
      <br />
      <br />

      <h3>
        Design. UX. HTML. CSS. Figma. Adobe XD. Bootstrap. Materialize.
        Javascript. Jquery. React.
      </h3>

      <h1>MacKenzie Clinton Front End Engineer</h1>

      <img
        width="150"
        height="200"
        src={ProfilePic}
        alt="Smiling for the camera"
      />

      <h4>
        I'm passionate about putting the pieces together to help you create a{" "}
        <strong>complete, user-focused front end </strong>for your project.
      </h4>
    </section>
  );
}

export default Home;
