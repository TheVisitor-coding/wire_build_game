// pages/api/addPlayer.js
import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  try {
    const { playerId, selectedScenario } = req.query;

    // Insertion du joueur avec les valeurs par défaut
    await sql`
      INSERT INTO players (id, scenario, challenge1, challenge2, challenge3)
      VALUES (${playerId}, ${selectedScenario}, false, false, false)
    `;

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erreur lors de l\'insertion du joueur :', error);
    res.status(500).json({ error: 'Erreur lors de l\'insertion du joueur.' });
  }
}
