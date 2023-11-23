export function loadData(playerId: any, setPlayerData: any){
    const storedPlayerData = localStorage.getItem("playerData");
    if (storedPlayerData) {
      const parsedPlayerData = JSON.parse(storedPlayerData);
      // console.log(parsedPlayerData);
      setPlayerData(parsedPlayerData);
    }
}