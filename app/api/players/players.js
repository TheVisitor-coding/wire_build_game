// pages/api/players/route.js
import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Méthode non autorisée
  }

  try {
    const { playerId, scenarioId } = req.query;

    // Insertion du joueur avec les valeurs par défaut
    await sql`
      INSERT INTO players (id, scenario, challenge1, challenge2, challenge3)
      VALUES (${playerId}, ${scenarioId}, false, false, false)
    `;

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erreur lors de l\'insertion du joueur :', error);
    res.status(500).json({ error: 'Erreur lors de l\'insertion du joueur.' });
  }
}
