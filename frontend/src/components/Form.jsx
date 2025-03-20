import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Form = () => {
  return (
    <div className="px-4">
      {/* <div className="form-section">
        <div className="form-section-content-container">
          <div className="form-section-content">
            <Label htmlFor="terms">Applicant Name</Label>
            <Input type="text" placeholder="Enter your Name" />
          </div>
          <div className="form-section-content">
            <Label htmlFor="terms">Applicant Name</Label>
            <Input type="text" placeholder="Enter your Name" />
          </div>
          <div className="form-section-content">
            <Label htmlFor="terms">Nationality</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select your Nationality" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Country</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div> */}
      <Tabs defaultValue="Personal Details" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="Personal Details">Personal Details</TabsTrigger>
          <TabsTrigger value="Guarantor Details">Guarantor Details</TabsTrigger>
          <TabsTrigger value="Address">Address</TabsTrigger>
        </TabsList>

        <TabsContent value="Personal Details">
          <Card>
            <CardHeader>
              <CardTitle>Personal Details</CardTitle>
              <CardDescription>Enter your Personal Details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="form-section-content-container">
                <div className="form-section-content">
                  <Label htmlFor="terms">Applicant Name</Label>
                  <Input type="text" placeholder="Enter your Name" />
                </div>
                <div className="form-section-content">
                  <Label htmlFor="terms">Applicant Name</Label>
                  <Input type="text" placeholder="Enter your Name" />
                </div>
                <div className="form-section-content">
                  <Label htmlFor="terms">Nationality</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your Nationality" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Country</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="secondary">Back</Button>
              <Button>Next</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="Guarantor Details">
          <Card>
            <CardHeader>
              <CardTitle>Guarantor Details</CardTitle>
              <CardDescription>
                Enter the details of your guarantor{" "}
             s </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="form-section-content-container">
                <div className="form-section-content">
                  <Label htmlFor="terms">Applicant Name</Label>
                  <Input type="text" placeholder="Enter your Name" />
                </div>
                <div className="form-section-content">
                  <Label htmlFor="terms">Applicant Name</Label>
                  <Input type="text" placeholder="Enter your Name" />
                </div>
                <div className="form-section-content">
                  <Label htmlFor="terms">Nationality</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your Nationality" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Country</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="secondary">Back</Button>
              <Button>Next</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="Address">
          <Card>
            <CardHeader>
              <CardTitle>Permanent Address</CardTitle>
              <CardDescription>Enter the address of your ID.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="form-section-content-container">
                <div className="form-section-content">
                  <Label htmlFor="terms">Applicant Name</Label>
                  <Input type="text" placeholder="Enter your Name" />
                </div>
                <div className="form-section-content">
                  <Label htmlFor="terms">Applicant Name</Label>
                  <Input type="text" placeholder="Enter your Name" />
                </div>
                <div className="form-section-content">
                  <Label htmlFor="terms">Nationality</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your Nationality" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Country</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="secondary">Back</Button>
              <Button>Next</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Form;
