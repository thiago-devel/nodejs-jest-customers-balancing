/**
 * Factory function that provides access to Customer Success business logics
 * functions objects.
 * 
 * @returns a bundle with all the Costumer Success functions
 */
export default function CostumerHandler() {

    function customerPositionBalancer(customerSuccessS, customer) {

        let cssBestMaxScoreRange = 0
        let cssBestMinScoreRange = Number.MAX_SAFE_INTEGER
        let cssBestHighScoreRange = cssBestMaxScoreRange
        let cssBestLowScoreRange = cssBestMinScoreRange
        let cssCsPreviousIndex = -1
        let cssCsNewIndex = -1
        let existingCssCs = []

        for (let i = 0; i < customerSuccessS.length; i++) {
            const cID = customer.id
            const cScore = customer.score
            const customerSuccess = customerSuccessS[i]

            if ((customerSuccess.c) && (customerSuccess.c.id == cID)) {
                cssCsPreviousIndex = customerSuccess.id
            }

            if (customerSuccess.score < cssBestMinScoreRange) {
                cssBestMinScoreRange = customerSuccess.score
            }
            
            if (customerSuccess.score > cssBestMaxScoreRange) {
                cssBestMaxScoreRange =  customerSuccess.score
            }

            if ((cssBestMinScoreRange <= cssBestLowScoreRange) && (customerSuccess.score < cScore)) {
                cssBestLowScoreRange = (customerSuccess.score > cssBestLowScoreRange) ? customerSuccess.score : cssBestMinScoreRange
            }

            if ((cssBestMaxScoreRange >= cssBestHighScoreRange) && (customerSuccess.score > cScore)) {
                
                cssBestHighScoreRange = (customerSuccess.score < cssBestHighScoreRange) ? customerSuccess.score : cssBestMaxScoreRange

                if ((customerSuccess.c) && (customerSuccess.c.length > 0)) {
                    existingCssCs = customerSuccess.c
                }

                cssCsNewIndex = customerSuccess.id
            }

        }
        
        return {
            cssBestMaxScoreRange: cssBestMaxScoreRange,
            cssBestMinScoreRange: cssBestMinScoreRange,
            cssBestHighScoreRange: cssBestHighScoreRange,
            cssBestLowScoreRange: cssBestLowScoreRange,
            cssCsPreviousIndex: cssCsPreviousIndex,
            cssCsNewIndex: cssCsNewIndex,
            atualCS: customerSuccessS[cssCsPreviousIndex],
            existingCssCs: existingCssCs,
            alterarParaCS: customerSuccessS[cssCsNewIndex],
            customer: customer
        }
    }

    return {
        customerPositionBalancer
    }
}