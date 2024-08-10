interface MajorCredits {
  id: 1;
  credits: number;
}
interface MinorCredits {
  id: 2;
  credits: number;
}

function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    id: 1,
    credits: subject1.credits + subject2.credits,
  };
}
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    id: 2,
    credits: subject1.credits + subject2.credits,
  };
}
