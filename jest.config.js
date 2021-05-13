module.exports = {
    roots: ['<rootDir>/8. Testing'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/**/*.ts']
}