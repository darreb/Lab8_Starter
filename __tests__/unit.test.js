// unit.test.js

const { tsExternalModuleReference, exportAllDeclaration } = require('@babel/types');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Testing phone number: 123456789', () => {
    expect(functions.isPhoneNumber(1234567890)).toBe(true);
})

test('Testing phone number: (123) 456 - 7890', () => {
    expect(functions.isPhoneNumber("(123) 456 - 7890")).toBe(true);
})

test('Testing phone number: 123)456-7890', () => {
    expect(functions.isPhoneNumber("(123)456-7890")).toBe(true);
})

test('Testing phone number: 123-456-7890', () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
})

test('Testing email: dcheng@ucsd.eddu', () => {
    expect(functions.isEmail("dcheng@ucsd.eddu")).toBe(true);
})

test('Testing email: dcheng@@ucsd.edu', () => {
    expect(functions.isEmail("dcheng@@ucsd.edu")).toBe(true);
})

test('Testing email: dcheng@ucsd.edu', () => {
    expect(functions.isEmail("dcheng@ucsd.edu")).toBe(true);
})

test('Testing email: dcheng12345@ucsd.eu', () => {
    expect(functions.isEmail("dcheng12345@ucsd.eu")).toBe(true);
})

test('Testing password: 12345', () => {
    expect(functions.isStrongPassword("12345")).toBe(true);
})

test('Testing password: ABC', () => {
    expect(functions.isStrongPassword("ABC")).toBe(true);
})

test('Testing password: ABC_1234', () => {
    expect(functions.isStrongPassword("ABC_123")).toBe(true);
})

test('Testing password: ABC_1234567891011', () => {
    expect(functions.isStrongPassword("ABC_1234567891011")).toBe(false);
})

test('Testing date: 123/12/2000', () => {
    expect(functions.isDate("123/12/2000")).toBe(true);
})

test('Testing date: 1/12/200', () => {
    expect(functions.isDate("1/12/200")).toBe(true);
})

test('Testing date: 1/12/2000', () => {
    expect(functions.isDate("1/12/2000")).toBe(true);
})

test('Testing date: 11/12/2000', () => {
    expect(functions.isDate("11/12/2000")).toBe(true);
})

test('Testing hex: AF09', () => {
    expect(functions.isHexColor("#AF09")).toBe(true);
})

test('Testing hex: AZ0009', () => {
    expect(functions.isHexColor("#AZ0009")).toBe(true);
})

test('Testing hex: ABF029', () => {
    expect(functions.isHexColor("#ABF029")).toBe(true);
})

test('Testing hex: AF0', () => {
    expect(functions.isHexColor("#AF0")).toBe(true);
})