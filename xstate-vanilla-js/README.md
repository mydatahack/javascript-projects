# Learning xstate with vanilla js

Based on Frontend Masters course (https://github.com/davidkpiano/frontend-masters-xstate-v2).

## Lesson 1 - State modelling

Specifying behaviour (given-when-then, etc)

- given is an state
- when is an event
- then is what happens given the current state and event.

**Examples** - including `event-first` vs `state-first` and `state machine` examples.

```js
// Given the status is idle, When Fetch occurs, Then, the status becomes loading
// Event-first approach
// State machine without xstate
// state: { data: null, error: null, status: 'loading', ... }
// event: { type: 'FETCH' }
const transitionEventFirst = (state, event) => {
  switch (event.type) {
    case "FETCH":
      if (state.status === "idle") console.log("starting to fetch data");
      return { status: "loading" };
    default:
      break;
  }
};

// State first
const transitionStateFirst = (state, event) => {
  switch (state.status) {
    case "idle":
      if (event.type === "FETCH") console.log("starting to fetch data");
      return { status: "loading" };
    default:
      break;
  }
};

window.transitionEventFirst = transitionEventFirst;
window.transitionStateFirst = transitionStateFirst;

// With State machine
const machine = {
  initial: "idle",
  states: {
    idle: {
      on: {
        FETCH: "loading",
      },
    },
    loading: {},
  },
};
const transitionStateMachine = (state, event) => {
  const nextState =
    machine.states[state.status].on?.[event.type] ?? state.status;

  return {
    state: nextStatus,
  };
};

window.transitionStateMachine = transitionStateMachine;
```

## Lesson 2 - Use xstate

This start up guide is a good one (https://xstate.js.org/docs/guides/start.html#running-our-machine).

`interpret` function is the mechanism to persist states in the application.

```js
import { createMachine, interpret } from "xstate";

const machine = createMachine({});

const service = interpret(machine).onTransition((state) => console.log(state));

// Start the service
service.start();

// send event
service.send({ type: "RESOLVE" });
```