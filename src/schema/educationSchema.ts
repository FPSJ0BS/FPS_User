import { z } from 'zod';

export const educationSchema = z.object({
  education: z.array(
    z.object({
      institute_name: z
        .string()
        .min(1, { message: 'Institute name is required' })
        .regex(/^[^\d]+$/, {
          message: 'Institute name should not contain any numbers',
        }),
      // board: z.string().min(1, { message: 'Board is required' }),
      course: z.string().min(1, { message: 'Course is required' }),
      start_date: z.string().min(1, { message: 'Start date is required' }),
      end_date: z.string().min(1, { message: 'End date is required' }),
      currently: z.boolean(),
      result: z.string().min(1, { message: 'Result is required' }),
      result_type: z.string().min(1, { message: 'Result type is required' }),
      type: z.string().min(1, { message: 'Type is required' }),
      specialization: z.string().min(1, { message: 'Specialization is required' }),
    })
  ),
});
