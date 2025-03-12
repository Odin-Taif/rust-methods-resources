"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useState } from "react";

const methods = [
    { name: "new", code: "let v: Vec<i32> = Vec::new();", description: "Creates a new empty vector." },
    { name: "with_capacity", code: "let v: Vec<i32> = Vec::with_capacity(10);", description: "Creates a vector with a specific capacity." },
    { name: "from", code: "let v = vec![1, 2, 3];", description: "Creates a vector using the vec! macro." },
    { name: "push", code: "v.push(4);", description: "Appends an element to the vector." },
    { name: "pop", code: "let last = v.pop();", description: "Removes and returns the last element, if any." },
    { name: "insert", code: "v.insert(2, 99);", description: "Inserts an element at a specific index." },
    { name: "remove", code: "let elem = v.remove(1);", description: "Removes an element at a specific index." },
    { name: "truncate", code: "v.truncate(3);", description: "Truncates the vector to a specific length." },
    { name: "clear", code: "v.clear();", description: "Clears all elements, making it empty." },
    { name: "len", code: "let length = v.len();", description: "Returns the number of elements in the vector." },
    { name: "is_empty", code: "let empty = v.is_empty();", description: "Checks if the vector is empty." },
    { name: "get", code: "let elem = v.get(1);", description: "Returns an element at an index as an Option." },
    { name: "contains", code: "let has_value = v.contains(&3);", description: "Checks if the vector contains a specific value." },
    { name: "retain", code: "v.retain(|&x| x % 2 == 0);", description: "Removes elements that do not satisfy a condition." },
    { name: "split_at", code: "let (left, right) = v.split_at(2);", description: "Splits the vector at a given index." },
    { name: "join", code: "let joined: String = v.iter().map(ToString::to_string).collect::<Vec<_>>().join(\", \");", description: "Joins elements into a single string with a separator." },
    { name: "sort", code: "v.sort();", description: "Sorts the vector in ascending order." },
    { name: "reverse", code: "v.reverse();", description: "Reverses the order of elements in the vector." },
    { name: "drain", code: "let drained: Vec<_> = v.drain(1..3).collect();", description: "Removes elements from a range and returns them." },
    { name: "extend", code: "v.extend(&[4, 5, 6]);", description: "Appends elements from another collection." },
    { name: "split", code: "let parts: Vec<&[i32]> = v.split(|&x| x == 2).collect();", description: "Splits the vector at each occurrence of a given element." },
    { name: "dedup", code: "v.dedup();", description: "Removes consecutive duplicate elements." },
];


export function RustVectorMethods() {
    const [copied, setCopied] = useState<number | null>(null);

    const handleCopy = (code: string, index: number) => {
        navigator.clipboard.writeText(code);
        setCopied(index);
        setTimeout(() => setCopied(null), 1000);
    };

    return (
        <div>
            <h1 className="text-4xl font-bold text-black dark:text-white">Rust Vector Methods</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {methods.map((method, index) => (
                    <Card key={index} className="bg-gray-900 text-white rounded-lg relative shadow-md">
                        <CardContent className="p-4 font-mono text-sm relative">
                            <div className="absolute top-2 right-2 flex gap-2">
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => handleCopy(method.code, index)}
                                        >
                                            <Copy size={16} />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>{copied === index ? "Copied!" : "Copy"}</TooltipContent>
                                </Tooltip>
                            </div>
                            <span className="text-green-400">{method.name}()</span>
                            <p className="text-gray-400 text-xs mt-1">{method.description}</p>
                            <pre className="mt-2 bg-gray-800 p-2 rounded-lg overflow-x-auto border border-gray-700">
                                {method.code}
                            </pre>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
