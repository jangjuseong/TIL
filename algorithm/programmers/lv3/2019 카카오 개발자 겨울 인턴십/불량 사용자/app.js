function isMatch(userId, bannedId) {
  if (userId.length !== bannedId.length) return false;

  for (let i = 0; i < userId.length; i++) {
    if (bannedId[i] !== '*' && userId[i] !== bannedId[i]) {
      return false;
    }
  }
  return true;
}

function backtrack(userIds, bannedIds, matched) {
  if (bannedIds.length === 0) {
    return [new Set(matched)];
  }

  const results = [];
  const bannedId = bannedIds[0];

  for (let i = 0; i < userIds.length; i++) {
    const userId = userIds[i];
    if (isMatch(userId, bannedId)) {
      const newMatched = matched.concat(userId);
      const newBannedIds = bannedIds.slice(1);
      const newUserIds = userIds.slice(0, i).concat(userIds.slice(i + 1));
      results.push(...backtrack(newUserIds, newBannedIds, newMatched));
    }
  }
  return results;
}

function solution(user_id, banned_id) {
  const matchedSets = backtrack(user_id, banned_id, []);
  const uniqueSets = {};

  for (const matchedSet of matchedSets) {
    const key = [...matchedSet].sort().join(',');
    uniqueSets[key] = true;
  }
  return Object.keys(uniqueSets).length;
}
