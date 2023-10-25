// Your tests here
import { isPalindrome } from "../utils"

describe("isPalindrome", () => {
    it("checks if a word is the same backwards as forwards", () => {
        const word = "racecar"
        const result = isPalindrome(word)
        expect(result).toBe(true)
    })
});
    it("checks if a word is the same backwards as forwards", () => {
    const word = "car"
    const result = isPalindrome(word)
    expect(result).toBe(false)
})
    it("checks if a word is the same backwards as forwards", () => {
    const word = "A man, a plan, a canal. Panama"
    const result = isPalindrome(word)
    expect(result).toBe(true)
})