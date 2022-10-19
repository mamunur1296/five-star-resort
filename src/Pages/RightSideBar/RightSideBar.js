import { GithubAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Context/UseContext";

const RightSideBar = () => {
  const { user, loginWithGoogle, loginWithGithub, loginWithGit } =
    useContext(AuthContext);
  const handalLoginGoogle = () => {
    loginWithGoogle()
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  const handleGithub = () => {
    loginWithGithub()
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
    loginWithGit()
      .then((res) => {
        const credential = GithubAuthProvider.credentialFromResult(res);
        const user = res.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h4 className="mb-2">Log in with </h4>
      <ButtonGroup className="w-100" vertical>
        <Button
          onClick={handalLoginGoogle}
          className="mb-2"
          variant="outline-secondary"
        >
          <FaGoogle></FaGoogle> Google
        </Button>
        <Button onClick={handleGithub} variant="outline-secondary">
          <FaGithub></FaGithub> Github
        </Button>
        <h4>{user?.name}</h4>
      </ButtonGroup>
    </div>
  );
};

export default RightSideBar;
