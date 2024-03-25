'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from '@/components/ui/select';
import { create } from 'domain';
import { createBoardAction } from '../actions';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  title: z.string().min(3).max(50),
  description: z.string().max(255),
  // owner_id: z.string().uuid(),
  githubRepo: z.string(),
});

export default function CreateBoardForm() {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      githubRepo: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      await createBoardAction(values);

      toast({
        title: 'Board created',
        description: `Title: ${values.title}, Description: ${values.description}`,
      });
      router.push('/boards');
    } catch (error) {
      console.error(error);
      toast({
        description: 'Board creation failed',
        variant: 'destructive',
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                This is the display name of the board.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                You can provide a brief description of the board.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="githubRepo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>GitHub Repo Url</FormLabel>
              <FormControl>
                <Input type="url" {...field} />
              </FormControl>
              <FormDescription>
                If you have a GitHub repository for this board, you can provide
                it here.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* TODO: Change the hardcoded select value
        <FormField
          control={form.control}
          name="owner_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Owner</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the owner of the board" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="260cf12a-795d-4879-86ef-7730512751asd5">
                      Sanyi
                    </SelectItem>
                    <SelectItem value="260cf12a-795d-4879-86ef-773051275135">
                      Csanád Tarjányi
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormDescription>The owner of the board.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        <Button type="submit">Create Board</Button>
      </form>
    </Form>
  );
}
