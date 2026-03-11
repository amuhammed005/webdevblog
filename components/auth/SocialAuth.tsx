import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Button from "../common/Button";

const SocialAuth = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <Button
        type="button"
        label="Continue with Google"
        icon={FaGoogle}
        outlined
        hoover
        onClick={() => {}}
      />
      <Button
        type="button"
        label="Continue with Github"
        icon={FaGithub}
        outlined
        hoover
        onClick={() => {}}
      />
    </div>
  );
};

export default SocialAuth;
