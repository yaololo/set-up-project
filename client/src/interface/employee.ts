type IDirectSubordinates = { "direct-subordinates": string[] };
type IEmployeeResponse = [string, IDirectSubordinates | undefined];

export { IDirectSubordinates, IEmployeeResponse };
