import React from 'react';
import logo from './logo.svg';
import Tone from 'tone';
import './App.css';

const playSynth = (note) => () => {
  let synth = new Tone.Synth().toMaster()
  synth.triggerAttackRelease(note, '8n')
}

function App() {
  return (
    <div className="App">
      <section id="main">
      <div class="keys">
        <div data-key="65" class="key" data-note="C" onClick={playSynth('C4')}/>
        <div data-key="87" class="key sharp" data-note="C#" onClick={playSynth('C4#')}/>
        <div data-key="83" class="key" data-note="D" onClick={playSynth('D4')}/>
        <div data-key="69" class="key sharp" data-note="D#" onClick={playSynth('D4#')}/>
        <div data-key="68" class="key" data-note="E" onClick={playSynth('E4')}/>
        <div data-key="70" class="key" data-note="F" onClick={playSynth('F4')}/>
        <div data-key="84" class="key sharp" data-note="F#" onClick={playSynth('F4#')}/>
        <div data-key="71" class="key" data-note="G" onClick={playSynth('G4')}/>
        <div data-key="89" class="key sharp" data-note="G#" onClick={playSynth('G4#')}/>
        <div data-key="72" class="key" data-note="A" onClick={playSynth('A4')}/>
        <div data-key="85" class="key sharp" data-note="A#" onClick={playSynth('A4#')}/>
        <div data-key="74" class="key" data-note="B" onClick={playSynth('B4')}/>
        <div data-key="75" class="key" data-note="C" onClick={playSynth('C4')}/>
        <div data-key="79" class="key sharp" data-note="C#" onClick={playSynth('C4#')}/>
        <div data-key="76" class="key" data-note="D" onClick={playSynth('D4')}/>
        <div data-key="80" class="key sharp" data-note="D#" onClick={playSynth('D4#')}/>
        <div data-key="186" class="key" data-note="E" onClick={playSynth('E4')}/>
      </div>
      </section>
    </div>
  );
}

export default App;
