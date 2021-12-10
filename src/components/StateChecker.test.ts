import React from "react";
import { render, screen } from "@testing-library/react";
import StateChecker from "./StateChecker";

test("renders learn react link", () => {
    const gameState:string[] = ["x","x","x"];
    const result = StateChecker.findWinner(gameState);
    expect(result).toBeTruthy();
});

test.each`
a    | expected
${["x", "x", "x", "", "o", "", "o", "", ""]} | ${true}
${["x", "", "", "", "x", "", "", "", "x"]} | ${true}
${["", "", "x", "", "x", "", "x", "", ""]} | ${true}
`('returns $expected when $a is a winning game state', ({a, expected}) => {
   expect(StateChecker.findWinner(a)).toBe(expected);
});





// test.each([[1, 2], [2, 4]])(
//     'double(%d)',
//     (input, expected) => {
//         expect(double(input)).toBe(expected);
//     }
// );

// test.each`
//     input	| expected
//     ${1}	| ${2}
//     ${2}	| ${4}
// `('double($input)', ({ input, expected }) => {
//     expect(double(input)).toBe(expected);
// });
//testet

