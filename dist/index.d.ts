type SayHelloProp = {
    firstName: string;
    lastName?: string;
    age?: number;
};

declare function sayHello({ firstName, lastName, age }: SayHelloProp): void;

export { type SayHelloProp, sayHello };
