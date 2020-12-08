export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/dollarsaved`;

export const budgetURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/expenses`;

export const config = {
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
    },
};
