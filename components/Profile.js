import React, { useEffect } from "react";

function Profile() {
  let myRef = React.createRef();
  useEffect(() => {
    myRef.current.scrollTo(0, 0);
  }, []);
  return (
    <div className="left">
      <p className="name">PHONG DANG</p>
      <p className="position">Fresher Front-end Developer React</p>
      <p className="aboutme">
        <a ref={myRef}> ABOUT ME</a>
      </p>
      <p className="aboutme ct">
        <a href="mailto:phongdang707@gmail.com"> CONTACT</a>
      </p>
      <p className="contact">
        Contact me for business at <br />
        <a href="mailto:phongdang707@gmail.com">phongdang707@gmail.com</a>
      </p>
    </div>
  );
}

export default Profile;
