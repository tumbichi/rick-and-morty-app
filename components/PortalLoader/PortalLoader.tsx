import styled from "styled-components";

export const PortalLoader = () => (
  <PortalWrapper>
    <div className="portal">
      <div className="swish">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="swirl">
        <span />
        <span />
        <span />
        <div className="swirl">
          <span />
          <div className="swirl">
            <span />
            <div className="swirl">
              <span />
              <div className="swirl">
                <span />
                <div className="swirl">
                  <span />
                  <div className="swirl">
                    <span />
                    <div className="swirl">
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PortalWrapper>
);

const PortalWrapper = styled.div`
  .portal {
    width: 120px;
    height: 120px;
    position: relative;

    margin: 0 0 0 0;
    border-radius: 50%;
    border: 1px solid #90da5f;
    box-shadow: inset 0 0 60px #d2e154;
    overflow: visible;
    background-color: #90da5f;
    animation: wobble 1s infinite linear;
  }

  .swirl span {
    background-color: #43ab4a;

    top: 10%;
    left: 15%;
    border-radius: 50%;
    display: block;
    width: 45%;
    height: 15%;

    position: absolute;
    z-index: 20;
    transform: rotate(45deg);
  }

  .swirl span:nth-child(2) {
    top: 30%;
    left: 32%;

    width: 5%;
    height: 10%;
  }
  .swirl span:nth-child(3) {
    top: 40%;
    left: 40%;
    width: 5%;
    height: 10%;
  }

  .swish {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    border: 1px solid #fafafa;
    height: 100%;
    border-radius: 50%;
    box-shadow: inset 0 0 100px #90da5f, 0 0 2px #90da5f;
    z-index: 10;
    animation: rotate2 15s infinite linear;
  }

  .swish span {
    position: absolute;
    top: 20%;
    left: 20%;
    display: block;
    width: 4%;
    height: 4%;
    background: #fafafa;
    border-radius: 50%;
  }

  .swish span:nth-child(1) {
    top: 10%;
    left: 50%;
  }

  .swish span:nth-child(2) {
    top: 90%;
    left: 30%;
  }

  .swish span:nth-child(3) {
    top: 10%;
    left: 80%;
  }
  .swish span:nth-child(4) {
    top: 40%;
    left: 22%;
    width: 8x;
    height: 8x;
  }

  .swirl {
    position: absolute;
    top: 8%;
    left: 8%;
    width: 80%;
    height: 80%;
    z-index: 4;
    border-radius: 50%;
    margin: 0% 0 0 0%;
    border: 0;
    box-shadow: inset -20px -22px 3px #90da5f;
    animation: rotate 15s infinite linear;
    background-color: #43ab4a;
    padding: 2px;
    content: ".";
    color: #fafafa;
    font-size: 20px;
  }

  .swirl:after {
    position: absolute;
    content: ".   .";
    font-size: 2.5em;
    display: inline-block;
    margin-top: -40px;
    color: green;
  }
  .swirl:before {
    content: ".  .";
    font-size: 2em;
    display: inline-block;
    margin-top: -40px;
    color: white;
  }

  .swirl<.swirl {
    animation-delay: 0.83s;
    animation-speed: 9.5s;
    box-shadow: inset -110px -110px 0 #90da5f;
    border-color: green;
  }
  .swirl<.swirl<.swirl,
  .swirl<.swirl<.swirl<.swirl<.swirl {
    animation-delay: 0.33s;
    animation-speed: 8.2s;
    box-shadow: inset -110px -110px 0 #90da5f;
  }
  .swirl > .swirl > .swirl > .swirl > .swirl > .swirl > .swirl {
    animation-delay: 0.33s;
    animation-speed: 8.2s;
    box-shadow: inset -20px -20px 0 #90da5f;
  }

  @keyframes rotate {
    0% {
      transform: rotate(90deg);
      color: #fafafa;
    }

    50% {
      color: green;
    }

    100% {
      transform: rotate(180deg);
      color: #fafafa;
    }
  }
  @keyframes rotate2 {
    0% {
      transform: rotate(0deg);
      color: #fafafa;
    }

    100% {
      transform: rotate(360deg);
      color: #fafafa;
    }
  }

  @keyframes wobxble {
    0% {
      width: 202px;
      height: 198px;
      margin: -98px 0 0 -102px;
      box-shadow: 0 0 10px #90da5f;
    }

    50% {
      width: 198px;
      height: 202px;
      margin: -102px 0 0 -98px;
      box-shadow: 0 0 15px #90da5f;
    }

    100% {
      width: 202px;
      height: 198px;
      margin: -98px 0 0 -102px;
      box-shadow: 0 0 10px #90da5f;
    }
  }
`;
