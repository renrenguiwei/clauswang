const flagMap = {
    1: ['transQty', '数量'],
    2: ['trans2Qty', '数量2'],
    3: ['baseQty', '主数量'],
    4: ['auxQty', '辅数量'],
    5: ['priceWithoutTax', '无税单价'],
    6: ['priceWithTax', '含税单价'],
    7: ['amountWithOutTax', '无税金额'],
    8: ['amountWithTax', '含税金额'],
    9: ['discountPct', '折扣率'],
    10: ['discount', '折扣'],
    11: ['tax', '税额'],
    12: ['taxPct', '税率'],
    13: ['listPrice', '报价'],
    14: ['changeQty', '修改数量'],
    15: ['changeWorth', '修改优惠后价税'],
    16: ['lotSplit', '拆分批次'],
    17: ['lossTransQty', '损耗数量'],
    18: ['lossTrans2Qty', '损耗数量2'],
    19: ['lossBaseQty', '损耗主数量'],
    20: ['lossAuxQty', '损耗辅数量'],
    30: ['warehouseId', '仓库'],
    31: ['projectId', '项目']
}

function manualInputFlag (flag) {
    const flagArr = flag
        .toString(2)
        .split('')
        .reverse()
        .map((i, index) => {if (i == 1) return index+1})
        .filter(i => i)

    let result = {}
    if (flagArr.length > 0) {
        flagArr.forEach(flag => {
            if (flagMap[flag]) {
                result[flag] = flagMap[flag].reverse()
            }
        })
    }
    return result
}

export default manualInputFlag