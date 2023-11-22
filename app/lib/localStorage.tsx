export function loadData(playerId: any, setPlayerData: any){
    const storedPlayerData = localStorage.getItem("playerData");
    if (storedPlayerData) {
      const parsedPlayerData = JSON.parse(storedPlayerData);
      const currentPlayer = parsedPlayerData.find(
        (player: any) => player.id === playerId
      );
      setPlayerData(currentPlayer);
    }
}