import { AppConst } from "@/Enum/AppConst";

const Banner = () => {
  return (
    <div className="careers-hb">
      <div className="careers-hb__container">
        <div
          className=" gatsby-image-wrapper"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <div
            aria-hidden="true"
            style={{ width: "100%", paddingBottom: "28%" }}
          />
          <picture>
            <source
              media="(max-width: 600px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAgCAYAAAASYli2AAAACXBIWXMAABYlAAAWJQFJUiTwAAADzElEQVRIx+2Uy2/UVRTHf3+IG1cuTTQhQogL7ELklUY2jcbUxgQrYrHYQF8Cwjx/8wgdNJWGEi0SoI0LUx+NtNOZYl8otDYznc6jM7/3dKalrQkL2XzMvTPTQKMRExcmsvjm3nvuPd/7Peeec5VDsTj/JpSnhE8J/1eEB8dj/yGF29WI9b7oOK+NRdkfHeeAwHjsiaBskY3HJYkgeH3iNo2zdzg6N8+JRIJTqRTtS0sSHVV0LqXpTFfQJZGhO5OpKKypeGtmlrbkIq5CgYBhELYsQpZJyDQJ/gW27yn7xqI0TE1LFX5dlwdUw5Bzn67L8VGo29beqq1mV969e4/Aiknn1QVORH4mvFlE1Q38mi6Ja+RiFM6e6rx2Ydg0cWkabk2TdiWgG4Q3HVq8kzTX3aLtRpxziQSBkoNP07fIBNFlx2HAKUpiQfDt6ir3Hz7k9sYGXxQrdsW3rOHPGrT2T/DKM2fYu9NN9/A8gZkMYVMnVFUp1Fw0TT4vO/j1yrrPshmwHQZLJfodR9oUdVnHNZsl/H2Ga9cS9H+VxBXNoGoaPaYpsZU72+B0fAl3Lo9qGvLx3LbJeb0Ssl+ELEJx2zqhskVkvUjPhoPf0vk4msJbqD6Mpss8nx1J0dQ4SufQAsGSiWpbdMV/wZvK0lNcIaKlUURerhZXpJM3r+E3dVx3cxxpGOP8RIbghi1DFLk+HrpD494RmtsmCG+UeP/Kdxx8wyuVibQE9QLK9OYm6QcPGF5dJSRe1zTwJPI07x/lw/d+wnM3h5rMyRA/CE7ReOgHjhz4kZMDM7y8s4WG9svc+G2dAdPGo+koIvZPCgV84tlNQ0IQXokXGBjJ457KEsjlCa+tcHwoRt2L3RzeFaZ+j8qOZ9+m9eYovb+vc2GtiNeyUIKGQcjQEaMrlcOnawRsk0DJJLhmEXQM3IvL+HIanvwyrzac44Xnmnjp+aPs3tHCmdlfaR+6R9elGBcXkyhB3aDHsQguaRxrncY9k0e1NXwFXaYgkknR2hPnI3UUd8sgHYe/pGlXL427e2muu8Spd65zTI3hvjXHhVQKpdZCnnSBN+sHqd/zGSdHJgkZNhHRhpbN1/dL9Dk2kfksw0mbqUyZqXSZb5I2gYUswTWbwKqDT4QscibCcU/mOO0fpaPpJmevz6POZQmYumxDUdwiJX7HxGMb+GxD1qTHEaMpK0S2qizsamsJ4k+dIn3lsvxh/JYhy8VvPP4xPAbtkb1qfyv+6qTyc2h4RMXXHIyKwton8WeokdUgFcrC3HZ7zbbd4e+g/JPDT0L4B+sikvYBXT4UAAAAAElFTkSuQmCC"
            />
            <source srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAABOUlEQVQY022Qz0oCURTGfaXewz+tahHtWrYLWkTIRAY6o1aIBFEEQU9g1K65M9CgJBTVIpVR59y5jkWLXuCeL2ZUUmnx8a3Oj993UjnH5Zzj6vlkhZN0xhZ6zfP0duNJH3X7ukSkzZB0RZKuh0qbJLVJpC056TiprHCwnJzjJr3quNj3feTPPBQe3lD9HqHcCVBTEa7GEcpEMCXBkhIWTToVH08tF5K2BW+0Wnwejvji54sP7j64+Nzn3esX3jJuOd9s8+lnxKUgYEtKtojYJOIJUCQQzCdtC2w2W6hFIxTaHRTbPZx0A+wc3yO7YmDvxkVVSpixZWIq5wz/Ac4mGzRAofGKQ/GO47FCvTfEpS9hdQYwh0ECiYGLk5eAsz9mbIH1Rw9G30dFhclhSUkUlYSl5B9sahcDfwFbzW66aNoZJwAAAABJRU5ErkJggg==" />
            <img
              aria-hidden="true"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAABOUlEQVQY022Qz0oCURTGfaXewz+tahHtWrYLWkTIRAY6o1aIBFEEQU9g1K65M9CgJBTVIpVR59y5jkWLXuCeL2ZUUmnx8a3Oj993UjnH5Zzj6vlkhZN0xhZ6zfP0duNJH3X7ukSkzZB0RZKuh0qbJLVJpC056TiprHCwnJzjJr3quNj3feTPPBQe3lD9HqHcCVBTEa7GEcpEMCXBkhIWTToVH08tF5K2BW+0Wnwejvji54sP7j64+Nzn3esX3jJuOd9s8+lnxKUgYEtKtojYJOIJUCQQzCdtC2w2W6hFIxTaHRTbPZx0A+wc3yO7YmDvxkVVSpixZWIq5wz/Ac4mGzRAofGKQ/GO47FCvTfEpS9hdQYwh0ECiYGLk5eAsz9mbIH1Rw9G30dFhclhSUkUlYSl5B9sahcDfwFbzW66aNoZJwAAAABJRU5ErkJggg=="
              alt=""
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center center",
                opacity: 0,
                transitionDelay: "500ms",
              }}
            />
          </picture>
          <picture>
            <source
              media="(max-width: 600px)"
              srcSet="https://www.phonepe.com/webstatic/6444/static/546229f3efc59ae3f90b0e32a0014b80/69585/careers_flow_mobile.png 200w,
https://www.phonepe.com/webstatic/6444/static/546229f3efc59ae3f90b0e32a0014b80/497c6/careers_flow_mobile.png 400w,
https://www.phonepe.com/webstatic/6444/static/546229f3efc59ae3f90b0e32a0014b80/d8815/careers_flow_mobile.png 750w"
            />
            <source
              srcSet="https://www.phonepe.com/webstatic/6444/static/0db882fe685bdca07133ee63e8005a42/69585/careers_flow_desktop.png 200w,
https://www.phonepe.com/webstatic/6444/static/0db882fe685bdca07133ee63e8005a42/497c6/careers_flow_desktop.png 400w,
https://www.phonepe.com/webstatic/6444/static/0db882fe685bdca07133ee63e8005a42/ee604/careers_flow_desktop.png 800w,
https://www.phonepe.com/webstatic/6444/static/0db882fe685bdca07133ee63e8005a42/f3583/careers_flow_desktop.png 1200w,
https://www.phonepe.com/webstatic/6444/static/0db882fe685bdca07133ee63e8005a42/5707d/careers_flow_desktop.png 1600w,
https://www.phonepe.com/webstatic/6444/static/0db882fe685bdca07133ee63e8005a42/64c33/careers_flow_desktop.png 3839w"
            />
            <img
              srcSet="https://www.phonepe.com/webstatic/6444/static/0db882fe685bdca07133ee63e8005a42/69585/careers_flow_desktop.png 200w,
https://www.phonepe.com/webstatic/6444/static/0db882fe685bdca07133ee63e8005a42/497c6/careers_flow_desktop.png 400w,
https://www.phonepe.com/webstatic/6444/static/0db882fe685bdca07133ee63e8005a42/ee604/careers_flow_desktop.png 800w,
https://www.phonepe.com/webstatic/6444/static/0db882fe685bdca07133ee63e8005a42/f3583/careers_flow_desktop.png 1200w,
https://www.phonepe.com/webstatic/6444/static/0db882fe685bdca07133ee63e8005a42/5707d/careers_flow_desktop.png 1600w,
https://www.phonepe.com/webstatic/6444/static/0db882fe685bdca07133ee63e8005a42/64c33/careers_flow_desktop.png 3839w"
              alt="Build your career at {AppConst.LogoName}!"
              loading="eager"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center center",
                opacity: 1,
                transition: "opacity 500ms ease 0s",
              }}
            />
          </picture>
        </div>
        <div className="careers-hb__container__header">
          <h1 id="careers-hb-heading">
            Build your career at {AppConst.LogoName}!
          </h1>
          <p>
            Become a part of India’s Fintech revolution
            <br />
            Join our team of disruptors!
          </p>
          <a className="careers-btn-container" href="/careers/job-openings/">
            See current openings
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
