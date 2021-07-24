module.exports = async function (context, req) {
  const { id } = req.query;
  const digits = Array.from(Array(10), (x, i) => (id.match(new RegExp(i, 'g')) || []).length);
  const sum = digits.reduce((sum, x, i) => sum + x * i, 0);
  const number = BigInt(id);
  const colorMax = BigInt(0xffffff);
  var Web3 = require('web3')
  var provider = new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/YOUR_INFURA_KEY_GOES_HERE");
  var web3 = new Web3(provider);

  let address = '0x6d4530149e5B4483d2F7E60449C02570531A0751';
  
  let abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"NFTId","type":"uint256"}],"name":"CloseNFTWindow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"NFTId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"}],"name":"NewNFTCreatedFor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"NFTIndex","type":"uint256"},{"indexed":false,"internalType":"string","name":"artworkHashIPFS","type":"string"},{"indexed":false,"internalType":"string","name":"artworkHashArweave","type":"string"},{"indexed":false,"internalType":"string","name":"artistName","type":"string"},{"indexed":false,"internalType":"uint256","name":"editionSize","type":"uint256"},{"indexed":false,"internalType":"string","name":"artTitle","type":"string"},{"indexed":false,"internalType":"string","name":"artworkType","type":"string"},{"indexed":false,"internalType":"string","name":"artworkSeries","type":"string"}],"name":"NewNFTMouldCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"NFTIndex","type":"uint256"},{"indexed":false,"internalType":"address","name":"signatureAddress","type":"address"},{"indexed":false,"internalType":"string","name":"signatureHash","type":"string"},{"indexed":false,"internalType":"string","name":"signatureMessage","type":"string"}],"name":"NewNFTMouldSignatures","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"NFTId","type":"uint256"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"NFTMachineFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"NFTId","type":"uint256"}],"name":"NFTMouldFileData","outputs":[{"internalType":"string","name":"hashIPFS","type":"string"},{"internalType":"string","name":"hashArweave","type":"string"},{"internalType":"string","name":"artworkType","type":"string"},{"internalType":"uint256","name":"unmintedEditions","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"NFTId","type":"uint256"}],"name":"NFTMouldMetadata","outputs":[{"internalType":"string","name":"artistName","type":"string"},{"internalType":"string","name":"artistNote","type":"string"},{"internalType":"uint256","name":"editionSize","type":"uint256"},{"internalType":"string","name":"artTitle","type":"string"},{"internalType":"string","name":"boxDetails","type":"string"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"NFTId","type":"uint256"}],"name":"NFTMouldSignatureData","outputs":[{"internalType":"address","name":"signatureAddress","type":"address"},{"internalType":"string","name":"signatureHash","type":"string"},{"internalType":"string","name":"signatureMessage","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"authorisedCaller","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"boxContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"NFTId","type":"uint256"}],"name":"closeNFTWindow","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"artworkHashIPFS","type":"string"},{"internalType":"string","name":"artworkHashArweave","type":"string"},{"internalType":"string","name":"artistName","type":"string"},{"internalType":"string","name":"artistNote","type":"string"},{"internalType":"address","name":"signatureAddress","type":"address"},{"internalType":"string","name":"signatureHash","type":"string"},{"internalType":"string","name":"signatureMessage","type":"string"},{"internalType":"uint256","name":"editionSize","type":"uint256"},{"internalType":"string","name":"artTitle","type":"string"},{"internalType":"string","name":"artworkType","type":"string"},{"internalType":"string","name":"boxDetails","type":"string"},{"internalType":"address payable[]","name":"royaltyAddress","type":"address[]"},{"internalType":"uint256[]","name":"royaltyBps","type":"uint256[]"}],"name":"createNFTMould","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getFeeBps","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getFeeRecipients","outputs":[{"internalType":"address payable[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getFileData","outputs":[{"internalType":"string","name":"hashIPFS","type":"string"},{"internalType":"string","name":"hashArweave","type":"string"},{"internalType":"string","name":"artworkType","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getMetadata","outputs":[{"internalType":"string","name":"artistName","type":"string"},{"internalType":"string","name":"artistNote","type":"string"},{"internalType":"uint256","name":"editionSize","type":"uint256"},{"internalType":"string","name":"artTitle","type":"string"},{"internalType":"uint256","name":"editionNumber","type":"uint256"},{"internalType":"string","name":"boxDetails","type":"string"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getSignatureData","outputs":[{"internalType":"address","name":"signatureAddress","type":"address"},{"internalType":"string","name":"signatureHash","type":"string"},{"internalType":"string","name":"signatureMessage","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_caller","type":"address"},{"internalType":"bool","name":"_value","type":"bool"}],"name":"setCaller","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newBoxContract","type":"address"}],"name":"updateBoxContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newURI","type":"string"}],"name":"updateURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawFunds","outputs":[],"stateMutability":"nonpayable","type":"function"}]




  let contract = new web3.eth.Contract(abi, address)

  async function getAllData () {
    let [ data1, data2, data3 ] = await Promise.all([
      contract.methods.getFileData(id).call({from: '0x6d4530149e5B4483d2F7E60449C02570531A0751'}),
      contract.methods.getMetadata(id).call({from: '0x6d4530149e5B4483d2F7E60449C02570531A0751'}),
      contract.methods.getSignatureData(id).call({from: '0x6d4530149e5B4483d2F7E60449C02570531A0751'}),
    ])
return {data1, data2, data3}
  }
  
  myData = await getAllData()

  let {hashIPFS, hashArweave, artworkType} = myData.data1;
  let {artistName, artistNote, editionSize, artTitle, editionNumber, boxDetails, isActive} = myData.data2;
  let {signatureAddress, signatureHash, signatureMessage} = myData.data3;

  if ( artworkType == "mp4") {
    animationFile = 'https://ipfs.infura.io/ipfs/' + hashIPFS;
  }
  else if ( artworkType == ".MP4") {
    animationFile = 'https://ipfs.infura.io/ipfs/' + hashIPFS;
  }
  else if ( artworkType == ".WAV") {
    animationFile = 'https://ipfs.infura.io/ipfs/' + hashIPFS;
  }
  else {
    animationFile = "";
    imageFile = 'https://ipfs.infura.io/ipfs/' + hashIPFS;
  }

/*
Trippyogi
Defaced Studio
Coldie
Angie Taylor
Quasimondo
Rutger van der tas
ROBNESS
The Genesis Badge
The Innovators Key
*/

  if (hashIPFS == "QmeAynYZfT8KSx3bE3WphZnCbdjP8Gn9vE96pob1bK3EE6") {
    imageFile = 'https://ipfs.infura.io/ipfs/' + "QmQjc9fV3131NprqEYHFRSkTnb6edJ2gWCtgNKM4jYBCrW";
  }
  if (hashIPFS == "QmRC4wHkpZVJAvKpygVvXAxHMEWB6K1R4wjznJni8kSSB6") {
    imageFile = 'https://ipfs.infura.io/ipfs/' + "QmbpLn8n44gE64M5e5TSgKpc98SXe7YFsZvenP8vKcDnwG";
  }
  if (hashIPFS == "QmPEJpmbmuM4JVZZdRn5T6pGJsQkDaGihztpPH5EKirTUZ") {
    imageFile = 'https://ipfs.infura.io/ipfs/' + "QmVXFfGDbTFGtPtdwxexqz2CkfzBc4mxfngCp78VGegy65";
  }
  if (hashIPFS == "QmZ1VLAx7kxhztpJ1zMe4Bxkcm71NozPGbArL4vFwRE6cn") {
    imageFile = 'https://ipfs.infura.io/ipfs/' + "QmbFxKkCrUuhJUZP4xenzWio4Awru51cX6vagfXxQi18d7";
  }
  if (hashIPFS == "QmYhmMu38asScHPB5jb8uDTQTEQCBQvqbVCCSZwwmqToWx") {
    imageFile = 'https://ipfs.infura.io/ipfs/' + "QmPrnqY3Jp9KRx4mFKDDYE2NMGkvASDASbWeGXsHJwrqjz";
  }
  if (hashIPFS == "Qmc58kvAh58FdQ5D1tVsMSemqVrToDirFCBsBaxfXbvGqw") {
    imageFile = 'https://ipfs.infura.io/ipfs/' + "QmQ4krMasAzub4D7wPS4DxA4TZfmyht6QKqLwDd1HNwaVQ";
  }
  if (hashIPFS == "QmZG9fP11cVWZhF5q7RgFDJfnTMFa5XQWKQtgJVbS6S2CX") {
    imageFile = 'https://ipfs.infura.io/ipfs/' + "QmVNSPKrcYxjCc6bQUNVALHNmKKDSqLdVhRsDhungPKi99";
  }
  if (hashIPFS == "QmZYamHvphvCG4Q8YmZTGdAa2tTSQdFRTSZXqiF6tTcd1K") {
    imageFile = 'https://ipfs.infura.io/ipfs/' + "QmWtGRQV7bgmz1WuxFYYgcYJ1MnmjvaoYZbeHvMcpRZYzU";
  }
  if (hashIPFS == "QmTHpsBeMJh9EVRBTYok9nVfLuCAMTEdjmtQwUFdSk6qeY") {
    imageFile = 'https://ipfs.infura.io/ipfs/' + "QmNTvmAUV6F2JKkVCXqCd33HEgFtebyUFCdepfxqZbCr3d";
  }



/*
alotta
bananakin
skeenee
didier ra
*/

  if (hashIPFS == "QmNyU8R5McMLxfgQGi3aXcnhSRuia55EH2rUWJrokgkqSm") {
    imageFile = 'https://ipfs.infura.io/ipfs/' + "QmYfPWYTLceMirqfLendUFUYsj6TYPKRaGfEHyvKet2zDK";
  }
  if (hashIPFS == "QmW38UvbjNSjJ1s78moKzZziPTHT9S31FRFoiGkxpDcnbT") {
    imageFile = 'https://ipfs.infura.io/ipfs/' + "QmReTzguJfDQxYNE4UnLxAYrMUixmqE3rqhScLmGAiGoVP";
  }
  if (hashIPFS == "QmUNvzm7bTH8WLodKZTdiwfesEKqJShc7ibX7XssJNbB4Q") {
    imageFile = 'https://ipfs.infura.io/ipfs/' + "QmWB5TnZ5SKKtUSe9w84XxM97rKcfJRqx94485SNePhJt8";
  }
  if (hashIPFS == "QmfDhd5dB4b6FghdJkyNGGNXahCNk9rN3kFKjgy6WzqmDH") {
    imageFile = 'https://ipfs.infura.io/ipfs/' + "QmTXN7rXv3whyWfDT7DbRVZRvCSDiHcQPMgoiNrHWfe7mm";
  }


  // may 1
  if (hashIPFS == "QmXCcTNNUaCScaNG3Pjxa5RqYgGig8qGXqBkG8p6aEUh7e") {
    imageFile = 'https://ipfs.infura.io/ipfs/' + "QmdA2Ceh2NcNC7Xaeoy2zX3WhFtgxHE64XZB8Cj4arZxac";
  }

  /*
giant swan
glass crane
gs x gc
varien
  */

  if (hashIPFS == "QmanC93UYkRQ5HuTqxuqqUiUJkb4VuCz2RGjuwNXYdYFGm") {
    imageFile = 'https://ipfs.infura.io/ipfs/' + "QmToccy4x6DR7nDH7ZzgdYB2Qtv4MPjeoBJ3Himk8FSkNC";
  }
  if (hashIPFS == "QmUCnY9K77dKpbzhGeZmupSvSSLiVDFSw5uhunkmuVQXxZ") {
    imageFile = 'https://ipfs.infura.io/ipfs/' + "QmXFnVGt7wTPVcwUAG8xTktTD6b7LKxGhDK9E3oKT4H7Ky";
  }
  if (hashIPFS == "QmanDDraYZY8coQUrVUxfmc3iPPwjzdLoB3GyY2XJJfxDX") {
    imageFile = 'https://ipfs.infura.io/ipfs/' + "QmT2Lu6mDsSW7E5XXYcYhMdzB1oCmnWYhTk9nGzBMDGmTX";
  }
  if (hashIPFS == "QmTEyQ452HKbKYHS5hWBfei1GHDuZK5zaMZyBxZ3MCGn84") {
    imageFile = 'https://ipfs.infura.io/ipfs/' + "QmTErdV4crM5aE6mkzbZUXM96w15U4NXZjmuQ3k8hc3grZ";
  }

  
  // dutchtide overwrite

  if (hashIPFS == "QmQynKPZgp61MMUEQ5nqLUFe9pEi37oMWk2dVvDceyGRZw") {
    imageFile = 'https://ipfs.infura.io/ipfs/' + "QmdnVs3uyriewRJWFpVY2ZBVGFBNp9BZE9H72bV2PTXYNf";
    animationFile = 'https://ipfs.infura.io/ipfs/' + "QmVrFtZXdpUzDwTgkEDrjb1MbNiPSdferQcygputAN53jA";
    artworkType = '.MP4';
  }

  /*
miss al simpson
victor meldrew
angie taylor
cryptoyuna
  */

if (hashIPFS == "QmYmPdztdZQ5XoGN6W2BZt7Qx8q8CViQ8orcgRH21g6Lhn") {
  imageFile = 'https://ipfs.infura.io/ipfs/' + "QmbZYhVbMRrCE8u4P46VBdyJoBJmZzncuRcRj6xAyyJH5a";
}
if (hashIPFS == "QmV1VXTtJBJSwSWLXjDprujDmLWg2vHngj59joJwfyNyo8") {
  imageFile = 'https://ipfs.infura.io/ipfs/' + "QmWxkJVo3i5NziQqCjwNYhNarg5wRgnrKj9WR4zzknu9dG";
}
if (hashIPFS == "QmUdkb4y4Q7rjGqbr9SowDgTytrqU5jVv1FyuBQFin2Ykh") {
  imageFile = 'https://ipfs.infura.io/ipfs/' + "QmX4LLVtsZGTcRfbJtqBg2JRb6MrnLUqoJKn9owyWA6rNW";
}
if (hashIPFS == "QmbmqLGrNtXTWh5UAzTLNuVF8mCD7VxfXBJFCirUoqXbVQ") {
  imageFile = 'https://ipfs.infura.io/ipfs/' + "QmXpxrz9vEvZBfHgx5k5fXqGdXtuJKG26nKPuFUBBcTf8t";
}



  var boxParse = JSON.parse(boxDetails);
  var NFTbox = boxParse.NFTbox;
  var Theme = boxParse.Theme;
  var Series = boxParse.Series;
  
  context.res = {
    body: {
      image: imageFile, description: 'NFTBoxes are a curated monthly box of NFTs on the newest gold standard of NFT technology.' + '\n\nArtist: ' + artistName + '\n\nSignature Address: ' + signatureAddress + '\n\nSignature Hash: ' + signatureHash + '\n\nSignature Message: ' + signatureMessage + '\n\nArtist Note: ' + artistNote,
      animation_url: animationFile,
      name: artTitle + " #" + editionNumber, 
      attributes: [

        {
          trait_type: 'artist name',
          value: artistName
        }, 
        {
          trait_type: 'edition number',
          value: editionNumber + ' of ' + editionSize
        }, 
        {
          trait_type: 'file type',
          value: artworkType
        },
        {
          trait_type: 'box name',
          value: NFTbox
        }, 
        {
          trait_type: 'theme',
          value: Theme
        }, 
        {
          trait_type: 'series',
          value: Series
        },                                                                 
      ],
    }
  };
}
