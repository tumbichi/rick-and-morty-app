import React from "react";
import styled from "styled-components";

export class Typewriter extends React.Component {
  state = {
    typed: "",
  };

  componentDidMount() {
    this.typeWord(
      this.props.inputStrings[0],
      [].concat(this.props.inputStrings)
    );
  }

  typeWord(word, words) {
    this.stringChecker(word, words);
  }

  typeWriter(string, words) {
    if (string.length === 0) {
      words = words.slice(1);
      words[0] && this.typeWord(words[0], words);
    } else {
      this.setState((state, props) => ({
        typed: state.typed.concat(string[0]),
      }));

      setTimeout(() => this.typeWriter(string.slice(1), words), 100);
    }
  }

  stringChecker(string, words) {
    this.typeWriter(string, words);
  }

  render() {
    return (
      <>
        <Title>
          {`${this.state.typed}`}
          <span>_</span>
        </Title>
      </>
    );
  }
}

const Title = styled.h1`
  color: white;
  font-size: 48px;

  span {
    font-size: 48px;
    animation-name: breath;
    animation-duration: 0.6s;
    animation-iteration-count: infinite;
  }

  @keyframes breath {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const TitleAnimate = styled.h1``;
