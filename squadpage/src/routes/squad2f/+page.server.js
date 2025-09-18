export async function load({ fetch }) {
    const url =
      "https://fdnd.directus.app/items/person?fields=*,squads.squad_id.name,squads.squad_id.cohort,squads.squad_id.tribe.name&filter[squads][squad_id][cohort][_eq]=2526&filter[squads][squad_id][tribe][name][_eq]=FDND%20Jaar%202&filter[squads][squad_id][name][_eq]=2F&sort=name";
  
    const student = await fetch(url);
    const cards = await student.json();
  
    return { members: cards.data };
  }
  