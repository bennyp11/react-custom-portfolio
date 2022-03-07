import TypeAnimation from "react-type-animation";
import "./LandingPage.css";

const Animation = ()=> {
    return (
    <TypeAnimation
        cursor={true}
        sequence={[
          'full-stack web engineer',
          2000,
          'cloud native system designer',
          2000,
          'computerphile',
          2000
        ]}
        wrapper="a"
        repeat={Infinity}
    />
      
    );
}

export default function LandingPage() {
    return (
        <div className="text-container">
        <h2>Benjamin Pollock, </h2>
        <div className="animation-container">
        <Animation />
        </div>
        </div>
    );
}

/**
 * 
 *
<h2>Thanks for visting my web portfolio.</h2>
        <h2>Everything here is open source on my github.</h2>
        <h2>I coded it myself in ReactJS & CSS.</h2>
        <h2>This showcases my engineering achievements.</h2>
        <h2>Achievements like.....</h2> *****/