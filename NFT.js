/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console 
    (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, age, country, favShow, favChar) {
    const NFT = {
        "Name" : name,
        "Age" : age,
        "Country" : country,
        "Show" : favShow,
        "Character" : favChar
    }
    NFTs.push(NFT);
    console.log("\nMinted: " + name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < NFTs.length; i++){
        console.log("\nName: \t\t\t" + NFTs[i].Name);
        console.log("Age: \t\t\t" + NFTs[i].Age);
        console.log("Country: \t\t" + NFTs[i].Country);
        console.log("Favorite Show:  " + NFTs[i].Show);
        console.log("Fav. Character: " + NFTs[i].Character);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal: " + NFTs.length)
}

// call your functions below this line
mintNFT("Josh", 19, "USA", "The Family Guy", "Stewie");
mintNFT("Bob", 20, "Japan", "Dragon Ball", "Goku");
mintNFT("Ryan", 22, "Italy", "The Big Bang Theory", "Sheldon");
mintNFT("Jack", 8, "UK", "Tom and Jerry", "Tom");
listNFTs();
getTotalSupply();