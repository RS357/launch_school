/*
 Problem: Write the function 'hammingDistance' in the class 'DNA' that 
 takes a string as an argument and returns the total number of characters
 that are differnt relative to the string provided to DNA class at instantiation

 Rules: 
 If either of the two strings compared are shorter in length, then compare over shorter length of both
 if input strand and current strand are length 0 return 0
 If input strand and current strand are same return 0

 
 */

class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(newStrand) {
    if (newStrand === this.strand) return 0;
    if (newStrand.length === 0 && this.strand.length === 0) return 0;
    let iterLength = 0;
    if (newStrand.length < this.strand.length) {
      iterLength = newStrand.length;
    } else  iterLength = this.strand.length;

    let diffs = 0;
    for (let idx = 0; idx < iterLength; idx += 1) {
      if (newStrand[idx] !== this.strand[idx]) {
        diffs += 1;
      }
    }
    return diffs;
  }
}

module.exports = DNA;