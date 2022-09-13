// @ts-nocheck
import { ResponseType, ResultCodesEnum, usersAPI } from "src/api/api"
import { follow } from "./users-reducer"
jest.mock("src/api/api")

const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>
const result: ResponseType = {
    resultCode: ResultCodesEnum.Success,
    data: {},
    messages: []
}


test('dispatch', async () => {
    const thunk = follow(1)
    const dicpatchMock = jest.fn()
    const getStateMock = jest.fn()

    // @ts-ignore
userAPIMock.follow.mockReturnValue(Promise.resolve(result))

    // @ts-ignore
    await thunk(dicpatchMock, getStateMock, {})

    expect(dicpatchMock).toBeCalledTimes(3)

})