const ImageCard = require("./ImageCard")

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Pierre Edouard", "Pierre Edouard", "Anas"], ["Pierre Edouard", "Pierre Edouard", "Michael"], ["Pierre Edouard", "Michael", "Pierre Edouard"]]
        inst = new ImageCard.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
