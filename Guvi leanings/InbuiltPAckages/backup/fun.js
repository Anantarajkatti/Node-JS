console.log("Hello Everyone")

//const sum=(a,b)=>a+b

//console.log(sum(5,6))

//console.log(window)
//console.log(document)
//console.log(global)


//command line argument
console.log(process.argv)           //O/P    //[
                                        //     'C:\\Program Files\\nodejs\\node.exe',
                                        //     'E:\\Node JS\\Guvi leanings\\InbuiltPAckages\\fun.js'
                                        //   ]

                                        
const [, , n1, n2] = process.argv       //   > node fun.js 50 60
const sum = (n1, n2) => n1 + n2
console.log(sum(+n1, +n2))
console.log(n1)