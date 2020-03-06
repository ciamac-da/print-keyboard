const fs = require ('fs')
const path = require ('path')
const util = require ('util')
const asc = require ('asciify-image')

const myTextName = 'keyboard.txt'
const mySecondText = 'keyboard2.txt'
const targetFileName = 'newMessage.txt'
const myTextPath = path.join(__dirname,'/data', myTextName)
const mySecondPath = path.join(__dirname, './', 'data/',mySecondText)
const targetPath = path.join(__dirname, './', 'data/', targetFileName )
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

async function createFile(content){
try{
      await writeFile(targetPath, content)
} catch (error){
      console.log(error)
}
}

createFile("Montag, 03.02.2020")

 async function getSecondText() {
      try{
            const secondData = await readFile(mySecondPath)
            console.log(secondData.toString())
      } catch (error){
            console.log(error)
      }
}
module.exports =getSecondText

const option = {
      fit: 'box',
      width: 50,
      height:25
}
asc('./data/crop.jpeg',option)
.then( asciified =>{
console.log(asciified)
})
.catch( err =>{
      console.log(err)
})


fs.readFile(myTextPath, (err,data) =>{
if(err){
      console.log(err)
}
console.log('path:' , myTextName)
console.log(data.toString())
//process.exit()
})