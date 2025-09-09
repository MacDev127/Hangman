// import React, { useReducer } from 'react';

// const ReducerMocks = () => {
//   //useState

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case 'increase':
//         return { ...state, count: state.count + 1 };
//       case 'decrease':
//         return { ...state, count: state.count - 1 };
//       case 'newUserInput':
//         return { ...state, userInput: action.payload };
//       case 'tgColor':
//         return { ...state, color: !state.color };
//       default:
//         throw new Error('unhandled action');
//     }
//   };
//   //useReducer
//   const [state, dispatch] = useReducer(reducer, {
//     count: 0,
//     userInput: '',
//     color: false,
//   });

//   return (
//     <div style={{ display: 'flex, flexDirection: "column"' }}>
//       <h2>Count = {state.count}</h2>
//       <div>
//         <button onClick={() => dispatch({ type: 'increase' })}>Increase</button>
//         <button onClick={() => dispatch({ type: 'decrease' })}>Decrease</button>
//       </div>

//       <div style={{ marginTop: '40px' }}>
//         <input
//           type="text"
//           placeholder="enter name"
//           value={state.userInput}
//           onChange={(e) =>
//             dispatch({ type: 'newUserInput', payload: e.target.value })
//           }
//         />
//         <div>
//           <h3 style={{ background: state.color ? 'lightgreen' : '' }}>
//             {state.userInput}
//           </h3>
//         </div>
//         {state.userInput && (
//           <button onClick={() => dispatch({ type: 'tgColor' })}>Click</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ReducerMock;
