function getMiddle(s)
{
    return s.substr((Math.ceil(s.length / 2) - 1), (2 - s.length % 2));
}