const ethers = require('ethers');

const calculateCommitHash = (candidateAddress, secret, msgSender) => {
    try {
        // Подготовка данных: кандидат, секрет и отправитель
        const dataTypes = ["address", "bytes32", "address"];
        // const secretBytes = ethers.encodeBytes32String(secret);
        const dataValues = [candidateAddress, secret, msgSender];
        
        // Вычисление хэша
        const hash = ethers.solidityPackedKeccak256(dataTypes, dataValues);
        console.log("Вычисленный хэш:", hash);
        
        return hash;
    } catch (error) {
        console.error("Ошибка вычисления хэша:", error);
    }
};


const candidateAddress = '0xdD870fA1b7C4700F2BD7f44238821C26f7392148'; // Адрес кандидата
const secret = "0x7365637265740000000000000000000000000000000000000000000000000000" // Преобразование вашего секретного слова в bytes32
const msgSender = '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4'; // Адрес отправителя (msg.sender)

calculateCommitHash(candidateAddress, secret, msgSender)