// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving 
// the order of characters. No two characters may map to the same character, but a character may map to itself.

const isomorphicStrings = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const smap = {};
  const tmap = {};

  for (let i = 0; i < s.length; i++) {
    if (!smap[s[i]]) {
      smap[s[i]] = t[i];
    }
    if (!tmap[t[i]]) {
      tmap[t[i]] = s[i];
    }
    if (smap[s[i]] !== t[i] || tmap[t[i]] !== s[i]) {
      return false;
    }
  }
  return true;
};

// Time - O(n)
// Space - O(1) // fixed number of characters
