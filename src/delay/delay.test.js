import delay from './delay';

test('api testing', async() => {
    const sum = await delay(()=> 10+10, 2000)
    expect(sum).toBe(20)
})