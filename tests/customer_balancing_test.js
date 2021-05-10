//import {jest} from '@jest/globals'

import CostumerSuccessHandler from "../modules/business/customers.js"

const CSsHandler = CostumerSuccessHandler()
const customerPositionBalancer = CSsHandler.customerPositionBalancer

test("Scenario 0", () => {
    const customer = {
      id: 11,
      score: 70
    }
    const customerSuccessS = [
      { id: 4, score: 30, c: {id: 3, score: 90} },
      { id: 2, score: 100 },
      { id: 3, score: 75 },
      { id: 1, score: 50, c: customer },
    ]
    const balancingResult = customerPositionBalancer(customerSuccessS, customer)
    expect(balancingResult.cssCsNewIndex).toEqual(3)
    expect(balancingResult.cssCsPreviousIndex).toEqual(1)
    expect(balancingResult.cssBestMaxScoreRange).toEqual(100)
    expect(balancingResult.cssBestMinScoreRange).toEqual(30)
    expect(balancingResult.cssBestHighScoreRange).toEqual(75)
    expect(balancingResult.cssBestLowScoreRange).toEqual(50)
  })
